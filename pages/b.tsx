import Link from "next/link";

export default function Page() {
  return (
    <div>
      Example Page B, click some links
      <div>
        <hr />
        <Link href="/?a=1" shallow prefetch={false}>
          First link
        </Link>
        <hr />
        <Link href="/b?a=2" shallow prefetch={false}>
          Second link
        </Link>
      </div>
    </div>
  );
}
