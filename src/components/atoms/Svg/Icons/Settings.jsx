import React from 'react';
import { useTheme } from 'styled-components';
import Svg from '../Svg';

const Icon = (props) => {
    const theme = useTheme();
    const { size } = props;
    return (
        <Svg width={size ?? 20} height={size ?? 20} viewBox="0 0 20 20" fill="none" {...props}>
            <path
                d="M17.4323 10.98C17.4723 10.66 17.5023 10.34 17.5023 10C17.5023 9.66 17.4723 9.34 17.4323 9.02L19.5423 7.37C19.7323 7.22 19.7823 6.95 19.6623 6.73L17.6623 3.27C17.5723 3.11 17.4023 3.02 17.2223 3.02C17.1623 3.02 17.1023 3.03 17.0523 3.05L14.5623 4.05C14.0423 3.65 13.4823 3.32 12.8723 3.07L12.4923 0.42C12.4623 0.18 12.2523 0 12.0023 0H8.00228C7.75228 0 7.54228 0.18 7.51228 0.42L7.13228 3.07C6.52228 3.32 5.96228 3.66 5.44228 4.05L2.95228 3.05C2.89228 3.03 2.83228 3.02 2.77228 3.02C2.60228 3.02 2.43228 3.11 2.34228 3.27L0.342281 6.73C0.212281 6.95 0.272281 7.22 0.462281 7.37L2.57228 9.02C2.53228 9.34 2.50228 9.67 2.50228 10C2.50228 10.33 2.53228 10.66 2.57228 10.98L0.462281 12.63C0.272281 12.78 0.222281 13.05 0.342281 13.27L2.34228 16.73C2.43228 16.89 2.60228 16.98 2.78228 16.98C2.84228 16.98 2.90228 16.97 2.95228 16.95L5.44228 15.95C5.96228 16.35 6.52228 16.68 7.13228 16.93L7.51228 19.58C7.54228 19.82 7.75228 20 8.00228 20H12.0023C12.2523 20 12.4623 19.82 12.4923 19.58L12.8723 16.93C13.4823 16.68 14.0423 16.34 14.5623 15.95L17.0523 16.95C17.1123 16.97 17.1723 16.98 17.2323 16.98C17.4023 16.98 17.5723 16.89 17.6623 16.73L19.6623 13.27C19.7823 13.05 19.7323 12.78 19.5423 12.63L17.4323 10.98ZM15.4523 9.27C15.4923 9.58 15.5023 9.79 15.5023 10C15.5023 10.21 15.4823 10.43 15.4523 10.73L15.3123 11.86L16.2023 12.56L17.2823 13.4L16.5823 14.61L15.3123 14.1L14.2723 13.68L13.3723 14.36C12.9423 14.68 12.5323 14.92 12.1223 15.09L11.0623 15.52L10.9023 16.65L10.7023 18H9.30228L8.95228 15.52L7.89228 15.09C7.46228 14.91 7.06228 14.68 6.66228 14.38L5.75228 13.68L4.69228 14.11L3.42228 14.62L2.72228 13.41L3.80228 12.57L4.69228 11.87L4.55228 10.74C4.52228 10.43 4.50228 10.2 4.50228 10C4.50228 9.8 4.52228 9.57 4.55228 9.27L4.69228 8.14L3.80228 7.44L2.72228 6.6L3.42228 5.39L4.69228 5.9L5.73228 6.32L6.63228 5.64C7.06228 5.32 7.47228 5.08 7.88228 4.91L8.94228 4.48L9.10228 3.35L9.30228 2H10.6923L11.0423 4.48L12.1023 4.91C12.5323 5.09 12.9323 5.32 13.3323 5.62L14.2423 6.32L15.3023 5.89L16.5723 5.38L17.2723 6.59L16.2023 7.44L15.3123 8.14L15.4523 9.27ZM10.0023 6C7.79228 6 6.00228 7.79 6.00228 10C6.00228 12.21 7.79228 14 10.0023 14C12.2123 14 14.0023 12.21 14.0023 10C14.0023 7.79 12.2123 6 10.0023 6ZM10.0023 12C8.90228 12 8.00228 11.1 8.00228 10C8.00228 8.9 8.90228 8 10.0023 8C11.1023 8 12.0023 8.9 12.0023 10C12.0023 11.1 11.1023 12 10.0023 12Z"
                fill={theme.colors.foregroundHighEmphasis}
            />
        </Svg>
    );
};

export default Icon;
