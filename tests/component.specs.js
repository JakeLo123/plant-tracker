import React from 'react';
import { expect } from 'chai';
import Main, { selectDay } from '../client/Main';
// import { Day, PlantList, Week } from '../client/components';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { stub } from 'sinon';

configure({ adapter: new Adapter() });

describe('Main component', () => {
  it('renders <Day />', () => {});
});
