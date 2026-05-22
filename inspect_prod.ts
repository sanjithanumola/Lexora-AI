import { spawn } from "child_process";
import http from "http";

function runProdTest() {
  console.log("=== STARTING PRODUCTION BUNDLE TEST ===");
  
  // Spawn dist/server.cjs on port 3005 with NODE_ENV=production
  const env = { ...process.env, NODE_ENV: "production", PORT: "3005" };
  const child = spawn("node", ["dist/server.cjs"], { env });

  child.stdout.on("data", (data) => {
    console.log("[SERVER OUT]:", data.toString().trim());
  });

  child.stderr.on("data", (data) => {
    console.error("[SERVER ERR]:", data.toString().trim());
  });

  // Wait 1.5 seconds for server to start, then make a POST query to port 3005
  setTimeout(() => {
    console.log("Pinging production server on port 3005...");
    const req = http.request(
      {
        host: "localhost",
        port: 3005,
        path: "/api/analyze-case",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (res) => {
        console.log("PROD API STATUS:", res.statusCode, res.statusMessage);
        let body = "";
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          console.log("PROD API RESPONSE LENGTH:", body.length);
          console.log("PROD API RESPONSE SNIPPET:", body.substring(0, 300));
          
          // Terminate child process and exit
          child.kill();
          process.exit(res.statusCode === 200 ? 0 : 1);
        });
      }
    );

    req.on("error", (e) => {
      console.error("PROD PING ERROR:", e.message);
      child.kill();
      process.exit(1);
    });

    req.write(JSON.stringify({ situation: "prod check", category: "default" }));
    req.end();
  }, 1500);
}

runProdTest();
