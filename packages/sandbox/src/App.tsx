import './App.css';
import { Button, ButtonVariations } from '@reactds/core';
import { cva } from 'class-variance-authority';

function App() {
	return (
		<>
			<Button
				variant='outline'
				variations={cva<ButtonVariations>('rds-btn', {
					variants: {
						variant: {
							default: 'btn-default',
							outline: 'btn-outline',
							ghost: 'btn-ghost',
							link: 'btn-link',

							// Custom
							minimal: 'btn-minimal',
						},
						size: {
							sm: 'btn-sm',
							md: 'btn-md',
							lg: 'btn-lg',
						},
						intent: {
							default: 'btn-default',
							primary: 'btn-primary',
							secondary: 'btn-secondary',
							info: 'btn-info',
							warning: 'btn-warning',
							success: 'btn-success',
							danger: 'btn-danger',
						},
					},
					defaultVariants: {
						variant: 'default',
						size: 'md',
						intent: 'primary',
					},
				})}
			>
				Hello
			</Button>
		</>
	);
}

export default App;
