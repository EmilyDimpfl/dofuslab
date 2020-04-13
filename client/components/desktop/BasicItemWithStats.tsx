/** @jsx jsx */

import * as React from 'react';
import { jsx, ClassNames } from '@emotion/core';
import { Popover } from 'antd';
import { useTheme } from 'emotion-theming';

import {
  popoverTitleStyle,
  itemImageBox,
  selected as selectedBox,
  itemImageDimensions,
} from 'common/mixins';
import { customSet_equippedItems_exos } from 'graphql/fragments/__generated__/customSet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagic, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'i18n';
import ItemStatsList from '../common/ItemStatsList';
import { item } from 'graphql/fragments/__generated__/item';
import { TTheme } from 'common/themes';

const wrapperStyles = {
  position: 'absolute' as 'absolute',
  right: 6,
  top: 6,
  fontSize: '0.75rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 4,
  margin: -4,
  transition: '0.3s opacity',
  opacity: 0,
};

interface IProps {
  item: item;
  exos?: Array<customSet_equippedItems_exos>;
  deletable?: boolean;
  selected?: boolean;
  onDelete?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  overlayCSS?: React.CSSProperties;
}

const BasicItemWithStats: React.FC<IProps> = ({
  item,
  exos,
  deletable,
  onDelete,
  selected,
  overlayCSS,
}) => {
  const { t } = useTranslation('common');
  const theme = useTheme<TTheme>();
  return (
    <ClassNames>
      {({ css }) => {
        const wrapperClass = css(wrapperStyles);
        return (
          <Popover
            placement="right"
            getPopupContainer={triggerNode => triggerNode.parentElement!}
            title={
              <div
                css={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                }}
              >
                <div css={{ fontSize: '0.8rem' }}>{item.name}</div>
                <div
                  css={{ marginLeft: 8, fontWeight: 400, fontSize: '0.75rem' }}
                >
                  {t('LEVEL_ABBREVIATION')} {item.level}
                </div>
              </div>
            }
            content={
              item.stats.length > 0 && <ItemStatsList item={item} exos={exos} />
            }
            overlayClassName={css({ ...popoverTitleStyle, ...overlayCSS })}
          >
            <div
              css={{
                ...itemImageBox(theme),
                ...(selected && { ...selectedBox }),
                ['&:hover']: {
                  [`.${wrapperClass}`]: {
                    opacity: 0.3,
                    ['&:hover']: {
                      opacity: 1,
                    },
                  },
                },
              }}
            >
              <img src={item.imageUrl} css={itemImageDimensions} />
              {(exos?.length ?? 0) > 0 && (
                <FontAwesomeIcon
                  icon={faMagic}
                  css={{
                    position: 'absolute',
                    left: 6,
                    bottom: 6,
                    fontSize: '0.75rem',
                    opacity: 0.3,
                  }}
                />
              )}
              {deletable && (
                <div className={wrapperClass} onClick={onDelete}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
              )}
            </div>
          </Popover>
        );
      }}
    </ClassNames>
  );
};

export default BasicItemWithStats;
