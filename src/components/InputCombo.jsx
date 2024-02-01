/* eslint-disable react/prop-types */
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// eslint-disable-next-line react/prop-types
function InputCombo({
	
	label,
	type,
	id,
	placeholder,
	className,
	labelClassName,
	inputClassName,
	value,
	HandleInput,
	refer
}) {
	return (
		<div className={`${className}`}>
			<div className='mb-4'>
				<Label htmlFor={type} className={labelClassName}>
					{label}{' '}
				</Label>
				<Input
					ref={refer}
					required={true}
					type={type}
					id={id}
					placeholder={placeholder}
					className={inputClassName}
					value={value}
					onChange={(e) => HandleInput(e.target.value)}
				/>
			</div>
		</div>
	);
}

export default InputCombo;
