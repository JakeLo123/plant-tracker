import React from 'react';
import { expect } from 'chai';
import Main, { selectDate, selectWeek } from '../client/Main';
import { stringifyDate, getWeekFromDay } from '../utils';
import { Day, PlantList, Week } from '../client/components';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { stub } from 'sinon';
configure({ adapter: new Adapter() });

const mockData = {
  data: [
    {
      name: 'banana',
      waterAfter: 2,
    },
    {
      name: 'cucumber',
      waterAfter: 7,
    },
  ],
};

describe('pagination', () => {
  let fetch, wrapper, promise;
  before(() => {
    promise = Promise.resolve(mockData);
    fetch = stub(axios, 'get')
      .withArgs('/api/plants')
      .returns(promise);
    wrapper = mount(<Main />);
  });
  after(() => {
    axios.get.restore();
  });
  it('displays this week after click', () => {
    const thisWeekButton = wrapper.find('#this-week-btn');
    expect(wrapper.find(Week)).to.have.length(0);
    thisWeekButton.simulate('click');
    expect(wrapper.find(Week)).to.have.length(1);
  });
  it('displays the correct day', () => {});
});

// describe('Main component', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<Main />, { disableLifecycleMethods: true });
//   });
//   describe('local state', () => {
//     it('should initialize with `selectedDate` set to the current date as a string', () => {
//       const currentDate = stringifyDate(new Date());
//       expect(wrapper.state().selectedDate).to.equal(currentDate);
//     });
//     it('should initialize with `selectedWeek` set to the current an array of dates representing the current week', () => {
//       const currentDate = stringifyDate(new Date());
//       const currentWeek = getWeekFromDay(currentDate);
//       expect(wrapper.state().selectedWeek).to.deep.equal(currentWeek);
//     });
//     describe('methods for setting state', () => {
//       it('`selectDate` should set visibilityFilter to `day` and select any date given as a string', () => {
//         const testState = selectDate('Wednesday December 25, 2019');
//         expect(testState.selectedDate).to.equal('Wednesday December 25, 2019');
//         expect(testState.visibilityFilter).to.equal('day');
//       });
//       it('`selectWeek` should set visibilityFilter to `week`', () => {
//         const testState = selectWeek();
//         expect(testState.visibilityFilter).to.equal('week');
//       });
//     });
//   });
// });
