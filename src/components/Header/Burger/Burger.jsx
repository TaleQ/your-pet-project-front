import { useState } from 'react';
import { StyledBurger } from './Burger.styled';
import { Navigation } from '../Navigation/Navigation';
import { Icon } from '../../../components/Icon/Icon';
import { IconBurgerBox } from './Burger.styled';
import { NavRegAndLog } from '../NavRegAndLog/NavRegAndLog';
import { UserMenu } from '../../UserMenu/UserMenu';
import { useAuth } from '../../../hooks/useAuth/useAuth';
// import useLockBodyScroll from '../../../hooks/useBodyScrollLock/useBodyScrollLock';

export const Burger = () => {
  const [open, setOpen] = useState(false);
  // const [lockBodyScroll, setLockBodyScroll] = useState(false);

  const { isLoggedIn } = useAuth();

  // useLockBodyScroll(!lockBodyScroll);

  const handleToggleBurger = () => {
    setOpen(!open);
  };

  // const handleLockBodyScroll = () => {
  //   setLockBodyScroll(!open);
  // };

  return (
    <>
      <Navigation open={open} handleToggleBurger={handleToggleBurger} />
      {isLoggedIn ? (
        <UserMenu open={open} handleToggleBurger={handleToggleBurger} />
      ) : (
        <NavRegAndLog />
      )}

      <StyledBurger open={open} onClick={handleToggleBurger}>
        {!open ? (
          <IconBurgerBox>
            <Icon
              iconName={'icon-menu-hamburger'}
              width={'24px'}
              height={'24px'}
              stroke={'#FFC107'}
            />
          </IconBurgerBox>
        ) : (
          <IconBurgerBox>
            <Icon
              iconName={'icon-cross-small'}
              width={'24px'}
              height={'24px'}
              stroke={'#FFC107'}
            />
          </IconBurgerBox>
        )}
      </StyledBurger>
    </>
  );
};
