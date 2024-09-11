"use client";
export default function Error({ error }: { error: { message: string } }) {
  return (
    <div id="error">
      <h2>An error occured!</h2>
      <p>{error?.message}</p>
    </div>
  );
}
