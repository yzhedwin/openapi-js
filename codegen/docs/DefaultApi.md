# GanttChartScheduleApi.DefaultApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitScheduleEvent**](DefaultApi.md#submitScheduleEvent) | **POST** /api/mmi/schedule | Submit a schedule event

<a name="submitScheduleEvent"></a>
# **submitScheduleEvent**
> submitScheduleEvent(body)

Submit a schedule event

### Example
```javascript
import {GanttChartScheduleApi} from 'gantt_chart_schedule_api';

let apiInstance = new GanttChartScheduleApi.DefaultApi();
let body = new GanttChartScheduleApi.GanttChartModelEvent(); // GanttChartModelEvent | Gantt chart event to process

apiInstance.submitScheduleEvent(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**GanttChartModelEvent**](GanttChartModelEvent.md)| Gantt chart event to process | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

