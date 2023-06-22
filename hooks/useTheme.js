import React,{useContext} from 'react';
import { ThemeStyles } from '../context/ThemeStyles';
export default function () {
    const theme = useContext(ThemeStyles)
    return theme
  }