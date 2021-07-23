import React from 'react';
import { GlobalCtx } from '../interfaces';

export const initialContext = {
	defaultInterval: 4000,
	width: '100%',
	height: 640,
};

const GlobalContext = React.createContext<GlobalCtx>(initialContext);

export default GlobalContext;
