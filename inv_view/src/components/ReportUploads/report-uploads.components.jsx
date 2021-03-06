import React,{useState, useEffect} from 'react';
import axios from 'axios';

import './report-uploads.styles.css';
import LoadingOverlay from 'react-loading-overlay';

import { useDispatch } from 'react-redux';

const ReportUpload =({
  header, dataTracked, uploadType, apiRoute, dupeCheck, dupeDelete, lastUpdatedUrl, 
  newestRecordUrl, lastUpdatedPostUrl, baseUrl, reportUrl, dispatchFunction}) => {

    const dispatch = useDispatch();

    const source = axios.CancelToken.source();

    const [file, setFile] = useState(null)
    const [inputKey, setInputKey] = useState(null)
    const [dupes, setDupes] = useState(null)
    const [lastUpdated, setLastUpdated] = useState(null)
    const [newestRecord, setNewestRecord] = useState(null)
    const [loading, setLoading] = useState(false)

    // eslint-disable-next-line
    useEffect(async() => {
      try {
        await Promise.all([
          (async() => {

            if (newestRecordUrl){

              let getDupeCheck = await axios.get(`${baseUrl}${dupeCheck}`, {cancelToken: source.token});
              setDupes(getDupeCheck.data)

              let getNewestRec = await axios.get(`${baseUrl}${newestRecordUrl}`, {cancelToken: source.token});
              setNewestRecord(getNewestRec.data)
            
            } else {

            }

            let getLastUpdates = await axios.get(`${baseUrl}${lastUpdatedUrl}`, {cancelToken: source.token});
            setLastUpdated(getLastUpdates.data)
          })()
        ]);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("request cancelled.")
        } else {
          throw error;
        }
      }

      return () => {
        console.log("cancelling request")
        source.cancel()
    };
      // eslint-disable-next-line
    }, []);

    const onFileChange = event => {
      setFile(event.target.files[0])
    };
    
    const clearFileInput = () => {
      let randomString = Math.random().toString(36);
      setInputKey(randomString);
    }

    const onFileUpload = async() => {

        if (file){
          setLoading(true)
        await Promise.all([
          (async() => {
          dispatch(dispatchFunction({file, apiRoute: `${apiRoute}`}))
          
          await axios.post(`${baseUrl}${lastUpdatedPostUrl}`, {cancelToken: source.token})
      
          if (header === 'Adjustment Report Upload' || header === 'Cycle Count Report Upload'){
      
            let getDupeCheck = await axios.get(`${baseUrl}${dupeCheck}`, {cancelToken: source.token});
                setDupes(getDupeCheck.data)
        
            let getNewestRec = await axios.get(`${baseUrl}${newestRecordUrl}`, {cancelToken: source.token});
            setNewestRecord(getNewestRec.data)
          
          } else {}
      
          let getLastUpdates = await axios.get(`${baseUrl}${lastUpdatedUrl}`, {cancelToken: source.token});
          setLastUpdated(getLastUpdates.data)
      
          clearFileInput();
      
          })()
        ])
        setLoading(false)
      }else{
        alert("Please select a file.")
      }

    };

  
    const deleteDuplicates = () =>{
      axios.delete(`${baseUrl}${dupeDelete}`)
      .then(res => alert('Duplicate records deleted'))
      .then(setDupes(0))
      .catch(err => alert('Something went wrong, unable to delete records at this time.'))

    }

      return (        
        <div className='form-container'>
        <LoadingOverlay className='form-container' active={loading} spinner text='Uploading Report'>
            <div className={`form-header ${uploadType}`}>
              {header}
              <a 
                target="_blank" 
                href={reportUrl}
                rel="noreferrer"
                style={{
                  paddingLeft: '1em',
                  cursor: 'pointer',
                  fontSize:'.75em',
                  color: 'whitesmoke'
                }}
                >Go to report</a>
              </div>
            
            <div className='form-body'>
            
            <div className='file-name-container'>
            
            <form>
                <input 
                  className='file-name input-field' 
                  type="file" 
                  onChange={onFileChange} 
                  accept=".xlsx"
                  key={inputKey || '' }
                />
            </form>
            </div>
            
            <div className='form-buttons-container'>
                <button className='submit-button form-button' onClick={onFileUpload}>
                  Upload
                </button>
            </div>

            </div>
            </LoadingOverlay>
            <div className='form-footer'>
                <div>
                    <label className='last-update-label'>{`Last Updated: `}</label>
                    <label className='last-update-value'>{new Date(lastUpdated).toLocaleString() }</label>
                </div>
              { dataTracked ? 
                <div className='alt-footer'>
                  <div>
                      <label className='last-update-label'>Newest Data: </label>
                      <label className='last-update-value'>{new Date(newestRecord).toLocaleString() }</label>
                  </div>
                  <div>
                    {dupes > 0 ? <button onClick={deleteDuplicates} className='duplicates-warning'>{`Delete Duplicates`}</button> : null}
                  </div>
                </div>
                :
                 null
              }
            </div>
           
        </div>
   
      );
  }
 
  export default ReportUpload;