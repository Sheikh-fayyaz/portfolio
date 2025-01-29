export default function Title({ content, alignX }) {
  return (
    <div className={`${alignX}`}>
      <h2 className={`section-title grad-text mb-md-5 mb-4`}>{content}</h2>
    </div>
  );
}
