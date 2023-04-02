import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import { Control, Controller, UseFormResetField, UseFormSetValue } from 'react-hook-form';
import ar from 'date-fns/locale/ar';

import 'react-datepicker/dist/react-datepicker.css';
import { CalendarIcon, CloseIcon } from '../../icons';

registerLocale('ar', ar);

interface Props {
    id: string;
    name: string;
    control: Control<any>;
    placeholderText: string;
    label?: string;
    reset?: UseFormResetField<any>;
    rules?: any;
    defaultValue?: Date;
    setValue?: UseFormSetValue<any>;
}

export const DatePickerInput: React.FC<Props> = ({
    name,
    control,
    placeholderText,
    id,
    label,
    rules = {},
    reset,
    defaultValue,
    setValue,
}) => {
    const localeValue = 'ar';

    const resetValues = () => {
        console.log('resetValues....');
        setValue ? setValue(name, '') : reset?.(name);
    };

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { ref, value, ...inputFields }, fieldState }) => (
                    <>
                        {label && (
                            <div>
                                <label className="react-datepicker__label" htmlFor={id}>
                                    {label}
                                </label>
                            </div>
                        )}
                        <div className="app-date-picker__wrapper">
                            <DatePicker
                                id={id}
                                className={`app-date-picker ${fieldState.error ? 'has-error' : ''}`}
                                wrapperClassName="app-date-picker__wrapper"
                                popperClassName="app-date-picker__popper"
                                minDate={new Date()}
                                selected={value}
                                placeholderText={placeholderText}
                                locale={localeValue}
                                {...inputFields}
                            />

                            {value && (
                                <button
                                    className="app-date-picker__icon app-date-picker__icon-close"
                                    onClick={() => resetValues()}
                                    type="button"
                                >
                                    <CloseIcon />
                                </button>
                            )}
                            <div className="app-date-picker__icon app-date-picker__icon-calender">
                                <CalendarIcon />
                            </div>
                        </div>

                        {/* {fieldState.error && <ErrorMessage error={fieldState.error} />} */}
                    </>
                )}
            />
        </>
    );
};
