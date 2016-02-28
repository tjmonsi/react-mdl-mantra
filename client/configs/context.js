import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {check} from 'meteor/check';
import {mount} from 'react-mounter';

export function initContext() {
  return {
    Meteor,
    FlowRouter,
    check,
    mount,
  };
}
