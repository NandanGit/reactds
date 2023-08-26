import React from 'react';
import { ContainerControl } from './Control.types';
import { SelectControl } from './SelectControl';
import { SwitchControl } from './SwitchControl';
import { Any } from '../../types';

const CONTROL_MAP: Record<ContainerControl['type'], React.FC<Any>> = {
	switch: SwitchControl,
	select: SelectControl,
};

export const Control: React.FC<{ control: ContainerControl }> = ({
	control,
}) => {
	const ControlComponent = CONTROL_MAP[control.type];
	return <ControlComponent control={control} />;
};
