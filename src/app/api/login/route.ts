export async function GET(r: Request) {
  const res = await fetch(
    "http://localhost:8000/api/v1/sessions/providers/local",
    {
      method: "POST",
      body: JSON.stringify({
        email: "purelyforcode@gmail.com",
        password: "password",
      }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const cookie = res.headers.get("set-cookie");
  // console.log(cookie);

  return new Response(null, {
    status: 200,
    headers: {
      "Set-Cookie": `${cookie}`,
    },
  });
}
