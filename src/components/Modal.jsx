import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = ({ children, buttonCaption, ref }) => {
	const dialog = useRef(null);

	useImperativeHandle(ref, () => ({
		open() {
			dialog.current.showModal();
		},
	}));

	const handleClose = () => {
		dialog.current.close();
	};

	return createPortal(
		<dialog
			ref={dialog}
			className="my-auto mx-auto backdrop:bg-stone-900/90 p-4 rounded shadow min-w-96"
		>
			<div className="flex flex-col gap-5 ">
				{children}
				<form method="dialog" className="flex justify-end">
					<Button type="ghost" onClick={handleClose}>
						{buttonCaption}
					</Button>
				</form>
			</div>
		</dialog>,
		document.getElementById('modal-root')
	);
};

export default Modal;
