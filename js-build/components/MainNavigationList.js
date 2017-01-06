import { MainNavigationListItem } from './MainNavigationListItem';

export const MainNavigationList = ({resourceTypes}) => (
    <ul className="nav__list">
      {resourceTypes.map((type, i) =>
        <MainNavigationListItem key={i}
                                type={type.type} />
      )}
    </ul>
  )