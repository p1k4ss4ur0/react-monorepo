import {useProvider} from '@provider';

interface ITitle {
  children: React.ReactNode;
  style?: {
    [key: string]: string | number;
  };
}

export default function Title({children, style}: ITitle) {
  const {settings} = useProvider();
  return (
    <h1 style={{color: settings.theme.title, fontFamily: 'Segoe UI', ...style}}>
      {children}
    </h1>
  );
}
