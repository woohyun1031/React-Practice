import React, { useCallback, useEffect } from 'react';
import Spinner from '../elements/Spinner';
import _ from 'lodash';

const InfinityScroll = props => {
  const { children, callNext, is_next, loading } = props;
  //Main에서 children, callnext(dispatch(getPostAxios());)
  //is_next: paging.load ? true : false
  //loading: is_loading
  console.log(callNext,"callNext in infinityscroll")
  console.log(is_next,"is_next in infinityscroll")
  console.log(loading,"loading in infinityscroll")

  const _handleScroll = _.debounce(() => {
    console.log("_handleScroll 실행")
    if (loading) return;
    //loading중이면 return하고 아님 진행
    const { innerHeight } = window;
    const { scrollHeight } = document.body;
    console.log(innerHeight,scrollHeight, "innerHeight,scrollHeight val")

    const scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
      console.log(scrollTop, "scrollTop val")


    if (scrollHeight - innerHeight - scrollTop < 200) {
      if (loading) {
        console.log(loading,"loading check")
        return;
      }
      console.log("callnext실행")
      callNext();      
    }
  }, 300);
  

  const handleScroll = useCallback(_handleScroll, [loading]);
  //is_next가 true면
  //window.addEventListener('scroll', handleScroll); 등록
  //Spinner 돌아감

  useEffect(() => {
    console.log(loading,is_next,"useEffect loading, is_next값 체크")
    if (loading) return;
     //loading중이면 return하고 아님 진행
    if (is_next) {      
      window.addEventListener('scroll', handleScroll);
      console.log("handlescroll event add")      
      //next값이 있으면 event 진행
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => {
    console.log("remove");
    window.removeEventListener('scroll', handleScroll);
  }}, [is_next, loading]);

  return (
    <>
      {children}
      {is_next && <Spinner size={100}/>}
    </>
  );
};

InfinityScroll.defaultProps = {
  children: null,
  callNext: () => {},
  is_next: false,
  loading: false,
};

export default InfinityScroll;
