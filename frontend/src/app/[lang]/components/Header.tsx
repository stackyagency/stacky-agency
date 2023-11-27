interface HeaderProps {
  data: {
    id: number;
    body: string;
    classname: string;
    title: string;
    description: string;
    image: string;
  };
}

export default function Header({ data }: HeaderProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <div className={data.classname}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
