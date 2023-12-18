import renderContent from './renderContent'

function getFieldValue(field: any) {
  if (field?.nodeType === 'document') {
    return renderContent(field)
  } else {        
    return field;
  }
}

type EntryModel = {
}

function getArrayItem(arrayItem: any){
  
  if(arrayItem.sys.type === 'Entry'){
    const fields =  mapEntryFieldsToPage<EntryModel>(arrayItem);    
    return fields;
  } 
  return getFieldValue(arrayItem);
}

export function mapEntryFieldsToPage<T>(entry: any) {
    
    if(!entry) return;

    const fields: T = {} as T
    

    for (const [key, value] of Object.entries(entry.fields)) {
      // check if entry.fields[key] is an array      
      if (Array.isArray(entry.fields[key])) {
        fields[key] = entry.fields[key].map((item: any) => getArrayItem(item));        
      } else {        
        fields[key] = getFieldValue(entry.fields[key]);        
      }
    }
      
    return fields
  }
