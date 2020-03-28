import { Wrapper } from './style'
import { ReactComponent as AdminIcon } from './icons/admin.svg'
import { ReactComponent as AlertIcon } from './icons/alert.svg'
import { ReactComponent as AppIcon } from './icons/app.svg'
import { ReactComponent as BookmarkIcon } from './icons/bookmark.svg'
import { ReactComponent as CartIcon } from './icons/cart.svg'
import { ReactComponent as CategoryIcon } from './icons/category.svg'
import { ReactComponent as ChatIcon } from './icons/chat.svg'
import { ReactComponent as ClearIcon } from './icons/clear.svg'
import { ReactComponent as CloseIcon } from './icons/close.svg'
import { ReactComponent as ColorIcon } from './icons/color.svg'
import { ReactComponent as DeleteIcon } from './icons/delete.svg'
import { ReactComponent as DownArrowIcon } from './icons/downArrow.svg'
import { ReactComponent as EditIcon } from './icons/edit.svg'
import { ReactComponent as ErrorIcon } from './icons/error.svg'
import { ReactComponent as FeatureIcon } from './icons/feature.svg'
import { ReactComponent as FilterIcon } from './icons/filter.svg'
import { ReactComponent as HomeIcon } from './icons/home.svg'
import { ReactComponent as ImageIcon } from './icons/image.svg'
import { ReactComponent as LeftArrowIcon } from './icons/leftArrow.svg'
import { ReactComponent as LogoutIcon } from './icons/logout.svg'
import { ReactComponent as MapPinIcon } from './icons/mapPin.svg'
import { ReactComponent as MenuIcon } from './icons/menu.svg'
import { ReactComponent as MessageIcon } from './icons/message.svg'
import { ReactComponent as NavigationIcon } from './icons/navigation.svg'
import { ReactComponent as OrderIcon } from './icons/order.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { ReactComponent as PriceIcon } from './icons/price.svg'
import { ReactComponent as ProductIcon } from './icons/product.svg'
import { ReactComponent as ProfileIcon } from './icons/profile.svg'
import { ReactComponent as RightArrowIcon } from './icons/rightArrow.svg'
import { ReactComponent as RotateLeftIcon } from './icons/rotateArrowLeft.svg'
import { ReactComponent as RotateRightIcon } from './icons/rotateArrowRight.svg'
import { ReactComponent as SearchIcon } from './icons/search.svg'
import { ReactComponent as ShippingIcon } from './icons/shipping.svg'
import { ReactComponent as ShoppingBagIcon } from './icons/shoppingBag.svg'
import { ReactComponent as StarIcon } from './icons/star.svg'
import { ReactComponent as StoreIcon } from './icons/store.svg'
import { ReactComponent as SuccessIcon } from './icons/success.svg'
import { ReactComponent as UserIcon } from './icons/user.svg'
import { getOptionsFrom } from '@theme'
import React from 'react'
import PropTypes from 'prop-types'

const getIcon = (name) => {
  switch (name) {
    case 'Admin': {
      return <AdminIcon />
    }
    case 'Alert': {
      return <AlertIcon />
    }
    case 'App': {
      return <AppIcon />
    }
    case 'Bookmark': {
      return <BookmarkIcon />
    }
    case 'Cart': {
      return <CartIcon />
    }
    case 'Category': {
      return <CategoryIcon />
    }
    case 'Chat': {
      return <ChatIcon />
    }
    case 'Clear': {
      return <ClearIcon />
    }
    case 'Close': {
      return <CloseIcon />
    }
    case 'Color': {
      return <ColorIcon />
    }
    case 'Delete': {
      return <DeleteIcon />
    }
    case 'DownArrow': {
      return <DownArrowIcon />
    }
    case 'Edit': {
      return <EditIcon />
    }
    case 'Error': {
      return <ErrorIcon />
    }
    case 'Feature': {
      return <FeatureIcon />
    }
    case 'Filter': {
      return <FilterIcon />
    }
    case 'Home': {
      return <HomeIcon />
    }
    case 'Image': {
      return <ImageIcon />
    }
    case 'LeftArrow': {
      return <LeftArrowIcon />
    }
    case 'Logout': {
      return <LogoutIcon />
    }
    case 'MapPin': {
      return <MapPinIcon />
    }
    case 'Menu': {
      return <MenuIcon />
    }
    case 'Message': {
      return <MessageIcon />
    }
    case 'Navigation': {
      return <NavigationIcon />
    }
    case 'Order': {
      return <OrderIcon />
    }
    case 'Plus': {
      return <PlusIcon />
    }
    case 'Price': {
      return <PriceIcon />
    }
    case 'Product': {
      return <ProductIcon />
    }
    case 'Profile': {
      return <ProfileIcon />
    }
    case 'RightArrow': {
      return <RightArrowIcon />
    }
    case 'RotateLeft': {
      return <RotateLeftIcon />
    }
    case 'RotateRight': {
      return <RotateRightIcon />
    }
    case 'Search': {
      return <SearchIcon />
    }
    case 'Shipping': {
      return <ShippingIcon />
    }
    case 'ShoppingBag': {
      return <ShoppingBagIcon />
    }
    case 'Star': {
      return <StarIcon />
    }
    case 'Store': {
      return <StoreIcon />
    }
    case 'Success': {
      return <SuccessIcon />
    }
    case 'User': {
      return <UserIcon />
    }
    default: {
      return ''
    }
  }
}

const Icon = ({ name, wrapped, ...props }) => {
  const icon = getIcon(name)

  return wrapped
    ? <Wrapper {...props}>{icon}</Wrapper>
    : icon
}

Icon.propTypes = {
  color: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  hoverColor: PropTypes.shape({
    position: PropTypes.number,
    type: PropTypes.oneOf(getOptionsFrom('palette')),
  }),
  name: PropTypes.oneOf([
    'Admin',
    'Alert',
    'App',
    'Bookmark',
    'Cart',
    'Category',
    'Chat',
    'Clear',
    'Close',
    'Color',
    'Delete',
    'DownArrow',
    'Edit',
    'Error',
    'Feature',
    'Filter',
    'Home',
    'Image',
    'LeftArrow',
    'Logout',
    'MapPin',
    'Menu',
    'Message',
    'Order',
    'Plus',
    'Price',
    'Product',
    'Profile',
    'Navigation',
    'RightArrow',
    'RotateLeft',
    'RotateRight',
    'Search',
    'Shipping',
    'ShoppingBag',
    'Star',
    'Store',
    'Success',
    'User',
  ]).isRequired,
  size: PropTypes.oneOf(getOptionsFrom('sizes')),
  wrapped: PropTypes.bool.isRequired,
}

Icon.defaultProps = {
  color: { position: 0, type: 'grayscale' },
  hoverColor: { position: 1, type: 'grayscale' },
  size: 'medium',
  wrapped: true,
}

export default Icon
