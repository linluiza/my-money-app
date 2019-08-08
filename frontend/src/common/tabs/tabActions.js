function selectTab(tabId){
    console.log('tab: '+tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export default {selectTab}