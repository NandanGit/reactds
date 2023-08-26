import React from 'react';
import { SwitchControlType } from './Control.types';
import { Badge } from '@reactds/coorg';

export const SwitchControl: React.FC<{ control: SwitchControlType }> = ({
	control,
}) => {
	return (
		<div
			className='container-control switch-control hover-help'
			// style={{ width: '2rem' }}
		>
			<Badge size='sm' className='container-control--name'>
				{control.name}
			</Badge>
			<input
				type='checkbox'
				checked={control.state}
				onChange={(e) => {
					control.setState(e.target.checked);
				}}
			/>
		</div>
	);
};
