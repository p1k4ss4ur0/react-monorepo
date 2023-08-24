import {useProvider} from '@provider';

import {icons} from 'lucide-react';

interface IIcon {
  name: string;
  color?: string;
  size?: string;
  style?: {
    [key: string]: string | number;
  };
}

export default function ({name, color, size, style}: IIcon) {
  const {settings} = useProvider();

  const Constructor = icons[name];

  return (
    <div style={{...styles.container, ...style}}>
      <Constructor
        color={
          color
            ? color
            : settings.theme.dark
            ? settings.theme.white
            : settings.theme.black
        }
        size={size}
      />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
