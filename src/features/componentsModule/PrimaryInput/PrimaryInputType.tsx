import React from 'react';

export interface PrimaryInputType {
    value: string,
    handleChangeAction(event: React.FormEvent<HTMLInputElement>): void
    isDisabled?: boolean,
    type: string,
    name: string,
    additionalClassName: string,
}
