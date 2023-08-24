import {useState, useRef} from 'react';

import {useProvider} from '@provider';

import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';

import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

const options = [
  {
    icon: 'ArrowDownAZ',
    label: 'Name descending',
  },
  {
    icon: 'ArrowDownZA',
    label: 'Name ascending',
  },
  {
    icon: 'CalendarPlus',
    label: 'Newest first',
  },
  {
    icon: 'CalendarMinus',
    label: 'Oldest first',
  },
];

export default function FilterButton() {
  const {settings, state, setState} = useProvider();

  const ref = useRef();

  // @ts-ignore
  const openDropdown = () => ref.current.open();

  // @ts-ignore
  const closeDropdown = () => ref.current.close();

  const Option = ({icon, label}) => {
    const [hover, setHover] = useState(false);

    const onMouseEnter = () => setHover(true);

    const onMouseLeave = () => setHover(false);

    const handleSelection = () => {
      setState({...state, collectionFilter: icon});
      closeDropdown();
    };

    return (
      <div
        // @ts-ignore
        style={{
          ...styles.option,
          ...(hover && {backgroundColor: settings.theme.foreground}),
        }}
        onClick={handleSelection}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <Icon
          name={icon}
          style={styles.icon}
          color={hover ? settings.theme.black : undefined}
        />
        <Text
          style={{
            ...(hover && {color: settings.theme.black, fontWeight: '500'}),
          }}>
          {label}
        </Text>
      </div>
    );
  };

  return (
    <Popup
      // @ts-ignore
      ref={ref}
      trigger={
        <div
          style={{
            ...styles.container,
            backgroundColor: settings.theme.foreground,
          }}
          // @ts-ignore
          onClick={openDropdown}>
          <Icon name={state.collectionFilter} color={settings.theme.black} />
        </div>
      }
      contentStyle={{
        ...styles.dropdown,
        borderColor: settings.theme.foreground,
        backgroundColor: settings.theme.background,
      }}
      arrowStyle={styles.arrow}
      position='bottom center'>
      {options.map((option, index) => (
        <Option key={index} icon={option.icon} label={option.label} />
      ))}
    </Popup>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingRight: 10,
    paddingLeft: 10,
    margin: 10,
    borderRadius: 2,
  },
  dropdown: {
    mouse: 'pointer',
    width: 200,
    borderRadius: 2,
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
  arrow: {
    height: 0,
    width: 0,
  },
  option: {
    height: 40,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
    marginLeft: 5,
  },
};
