import React from 'react';
import { connect } from 'react-fela';

import { ITheme } from '../../../Theme';

import SkillStyles from './Skill.styles';
import { IOwnProps, IProps, IStyles } from './Skill.types';

export const Skill: React.FunctionComponent<IProps> = ({
  title,
  styles,
}: IProps) => {
  return <li className={styles.container}>{title}</li>;
};

export default connect<IOwnProps, IStyles, ITheme>(SkillStyles as any)(Skill);
