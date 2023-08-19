import React from 'react';
import { Container } from '../Container';

export interface SelectGalleryProps
	extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectGallery: React.FC<SelectGalleryProps> = () => {
	return <Container>{SelectGallery.displayName}</Container>;
};

SelectGallery.displayName = 'SelectGallery';
