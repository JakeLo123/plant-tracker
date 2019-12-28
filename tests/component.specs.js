import React from 'react';
import { expect } from 'chai';
import Main, { selectDate, selectWeek } from '../client/Main';
import { stringifyDate, getWeekFromDay } from '../utils';
import { Day, PlantList, Week } from '../client/components';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { stub } from 'sinon';
import mockData from './MockData.js';
configure({ adapter: new Adapter() });

describe('Main component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />, { disableLifecycleMethods: true });
  });
  describe('local state', () => {
    it('should initialize with `selectedDate` set to the current date as a string', () => {
      const currentDate = stringifyDate(new Date());
      expect(wrapper.state().selectedDate).to.equal(currentDate);
    });
    it('should initialize with `selectedWeek` set to the current an array of dates representing the current week', () => {
      const currentDate = stringifyDate(new Date());
      const currentWeek = getWeekFromDay(currentDate);
      expect(wrapper.state().selectedWeek).to.deep.equal(currentWeek);
    });
    describe('methods for setting state', () => {
      it('`selectDate` should set visibilityFilter to `day` and select any date given as a string', () => {
        const testState = selectDate('Wednesday December 25, 2019');
        expect(testState.selectedDate).to.equal('Wednesday December 25, 2019');
        expect(testState.visibilityFilter).to.equal('day');
      });
      it('`selectWeek` should set visibilityFilter to `week`', () => {
        const testState = selectWeek();
        expect(testState.visibilityFilter).to.equal('week');
      });
    });
  });
});

describe('pagination', () => {
  let wrapper, promise;
  before(() => {
    promise = Promise.resolve(mockData);
    stub(axios, 'get')
      .withArgs('/api/plants')
      .returns(promise);
    wrapper = mount(<Main />);
  });
  after(() => {
    axios.get.restore();
  });
  it('should fetch all plants', () => {
    const state = mockData.data;
    expect(wrapper.state().plants).to.deep.equal(state);
  });
  it('displays the correct day', () => {
    const dayWrapper = wrapper.find(Day);
    const currentDate = stringifyDate(new Date());
    expect(dayWrapper.props().selectedDate).to.equal(currentDate);
  });
  it('should display a `select` tag with the selected day as the value', () => {
    const dayWrapper = wrapper.find(Day);
    const selectTag = dayWrapper.find('select').at(0);
    expect(selectTag.props().value).to.equal(dayWrapper.props().selectedDate);
  });
  it('`select` tag should display the new selected day as the value after a change', () => {
    const dayWrapper = wrapper.find(Day);
    const selectTag = dayWrapper.find('select').at(0);
    selectTag.simulate('change', {
      target: { value: 'Sunday December 29, 2019' },
    });
    const newDayWrapper = wrapper.find(Day);
    const newSelectTag = newDayWrapper.find('select').at(0);
    expect(newSelectTag.props().value).to.equal('Sunday December 29, 2019');
  });
  it('displays this week after click on `this week`', () => {
    const thisWeekButton = wrapper.find('#this-week-btn');
    expect(wrapper.find(Week)).to.have.length(0);
    thisWeekButton.simulate('click');
    expect(wrapper.find(Week)).to.have.length(1);
    expect(wrapper.find(PlantList)).to.have.length(5);
  });
});
