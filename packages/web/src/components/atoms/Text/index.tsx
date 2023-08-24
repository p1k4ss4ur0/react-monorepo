import {useProvider} from '@provider';

interface IText {
  children: React.ReactNode;
  style?: {
    [key: string]: string | number;
  };
}

export default function Text({children, style}: IText) {
  const {settings} = useProvider();
  return (
    <p style={{color: settings.theme.text, fontFamily: 'Segoe UI', ...style}}>
      {children}
    </p>
  );
}
