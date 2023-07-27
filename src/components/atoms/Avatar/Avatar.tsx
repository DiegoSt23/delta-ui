import styles from './avatar.module.scss';

export interface AvatarProps {
  name: string;
  imgUrl?: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  mainContainerClassName?: string;
  imgClassName?: string;
  textClassName?: string;
}

const defaultProps: Partial<AvatarProps> = {
  imgUrl: undefined,
  backgroundColor: '#d9d9d9',
  textColor: '#202020',
  size: 'md',
  mainContainerClassName: undefined,
  imgClassName: undefined,
  textClassName: undefined,
};

const getInitials = (name: string): string => {
  const words = name.split(' ');
  if (words.length > 1) {
    return words.reduce((acc, curr, index) => {
      if (index < 2) {
        return acc + curr.charAt(0);
      }
      return acc;
    }, '');
  }
  return words[0].charAt(0);
};

const sizes = {
  xs: 35,
  sm: 45,
  md: 55,
  lg: 70,
  xl: 80,
};

const textSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 25,
};

export const Avatar = ({
  name,
  imgUrl,
  backgroundColor,
  textColor,
  size,
  mainContainerClassName,
  imgClassName,
  textClassName,
}: AvatarProps) => (
  <div
    className={[styles.avatarMainContainer, mainContainerClassName].join(' ')}
    style={{
      backgroundColor,
      width: `${sizes[size || 'md']}px`,
      height: `${sizes[size || 'md']}px`,
    }}
  >
    {imgUrl ? (
      <img
        src={imgUrl}
        alt='name'
        className={[styles.img, imgClassName].join(' ')}
      />
    ) : (
      <p
        className={[styles.name, textClassName].join(' ')}
        style={{ color: textColor, fontSize: `${textSizes[size || 'md']}px` }}
      >
        {getInitials(name)}
      </p>
    )}
  </div>
);

Avatar.defaultProps = defaultProps;
