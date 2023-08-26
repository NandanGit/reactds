import React from 'react';
import { SelectControlType } from './Control.types';
import { Badge, Select } from '@reactds/coorg';
import { capitalize } from '../../utils/string';

export const SelectControl: React.FC<{ control: SelectControlType }> = ({
	control,
}) => {
	return (
		<div className='container-control select-control hover-help'>
			<Badge size='sm' className='container-control--name'>
				{control.name}
			</Badge>
			<Select value={control.state} onValueChange={control.setState}>
				{control.options.map((option) => {
					const selectOption = Array.isArray(option)
						? option
						: ([option, capitalize(option)] as const);
					return (
						<Select.Item key={selectOption[0]} value={selectOption[0]}>
							{selectOption[1]}
						</Select.Item>
					);
				})}
			</Select>
		</div>
	);
};
