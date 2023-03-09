import ContentLoader from "react-content-loader";

export const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={1}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="134" cy="130" r="125" />
    <rect x="3" y="270" rx="10" ry="10" width="272" height="25" />
    <rect x="4" y="316" rx="10" ry="10" width="272" height="85" />
    <rect x="7" y="420" rx="10" ry="10" width="117" height="40" />
    <rect x="155" y="420" rx="10" ry="10" width="120" height="40" />
  </ContentLoader>
);
