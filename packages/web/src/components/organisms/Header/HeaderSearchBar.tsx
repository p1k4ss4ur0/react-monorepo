import Input from '@components/atoms/Input';

import CreateButton from './CreateButton';
import Filter from './FilterButton';

export default function HeaderSearchBar() {
  return (
    <div style={styles.container}>
      <Input placeholder='Search' icon='Search' />
      <Filter />
      <CreateButton />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
