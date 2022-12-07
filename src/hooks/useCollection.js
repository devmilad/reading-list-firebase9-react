import { useEffect, useRef, useState } from 'react'
import {db} from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'


export default function useCollection(c, _q) {
    const [documents, setDocuments] = useState(null);
  
    const q=useRef(_q).current

   const unsub= useEffect(() => {
        let ref=collection(db, c )

        if (q) {
          ref=query(ref, where(...q) )
        }
        onSnapshot(ref,(snapshot)=>{
            let result=[]
            snapshot.docs.forEach(doc=>{
                result.push({id:doc.id, ...doc.data()})
              })
              setDocuments(result)
        })
        return ()=>unsub()
      }, [c,q]);

      return {documents}
}
