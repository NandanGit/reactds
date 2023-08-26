import { Any } from '../../types';

export type ControlBase<T> = {
	name: string;
	state: T;
	setState: React.Dispatch<React.SetStateAction<T>>;
};

export type SelectControlType<T extends string = Any> = ControlBase<T> & {
	type: 'select';
	options: T[] | [T, string][];
};

export type SwitchControlType = ControlBase<boolean> & {
	type: 'switch';
};

export type ContainerControl = SelectControlType | SwitchControlType;
