export async function GET() {
  const res = await fetch("https://test-e4x9.onrender.com/api/v1/comments", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return Response.json({ data });
}
