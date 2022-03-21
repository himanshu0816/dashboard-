/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// import img1 from '../../../../../public/media/icons/'
import {KTSVG,toAbsoluteUrl} from '../../../../_metronic/helpers'
// import {Dropdown1} from '../../content/dropdown/Dropdown1'
import {Dropdown1} from '../../../../_metronic/partials/content/dropdown/Dropdown1'

type Props = {
className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  return (
    
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
      <ul className='pagination'>
          <h6 style={{paddingLeft:'40px'}}>
            <br/>
              TO
            </h6>
            <div style={{paddingLeft:'10px'}}>
            <input type="date" style={{width:'140px', height:'40px'}}/>
            </div>
            <h6 style={{paddingLeft:'10px'}}>
            <br/>
              From
            </h6>
            <div style={{paddingLeft:'10px'}}>
            <input type="date" style={{width:'140px', height:'40px'}}/>
            </div>
            
            <h6 style={{paddingLeft:'10px'}}>
            <br/>
                User
              </h6>
            <div className='row mb-6'>
              
              <div className='col-lg-6 fv-row' style={{paddingLeft:'20px'}}>
                <select
                  className='form-select  ' style={{width:'150px'}}
                  // {...formik.getFieldProps('country')}
                >
                  <option value='' disabled selected hidden>User</option>
                  <option value='AF'>Xyz</option>
                  <option value='AX'>Anc </option>
                  <option value='AL'>Rahul</option>
                  <option value='DZ'>kiran</option>
                  <option value='AS'>pqr</option>
                  <option value='AD'>abc</option>
                  <option value='AO'>king</option>
                  <option value='AI'>raman</option>
                  <option value='AQ'>dev</option>
                  <option value='AG'>jagesh</option>
                  <option value='AR'>himanshu</option>
                  <option value='AM'>Ria</option>
                  <option value='AW'>preet</option>
                  <option value='AU'>j.kaur</option>
                  <option value='AT'>Einstien</option>
                  <option value='AZ'>dhoni</option>
                  <option value='BS'>biswajeet</option>
                  <option value='BH'>kunal</option>
                  <option value='BD'>Ria</option>
                  
                </select>
                {/* {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )} */}
              </div>
            </div>

            <h6 style={{paddingLeft:'10px'}}>
            <br/>
                Project
              </h6>
            <div className='row mb-6'>
              
              <div className='col-lg-6 fv-row' style={{paddingLeft:'20px'}}>
                <select
                  className='form-select  ' placeholder='Project' style={{width:'150px'}}
                  // {...formik.getFieldProps('country')}
                >
                  <option value='' disabled selected hidden>Project Name</option>
                  <option value='AF'>Xyz</option>
                  <option value='AX'>Abc</option>
                  <option value='AL'>pqr</option>
                  <option value='DZ'>cx</option>
                  <option value='AS'>chat app</option>
                  <option value='AD'>andriod</option>
                  <option value='AO'>MERN</option>
                  <option value='AI'>MEAN</option>
                  <option value='AQ'>Teams</option>
                  <option value='AG'>dashobard</option>
                  <option value='AR'>header</option>
                  <option value='AM'>cx choice</option>
                  <option value='AW'>hello</option>
                  
                  
                </select>
                {/* {formik.touched.country && formik.errors.country && (
                  <div className='fv-plugins-message-container'>
                    <div className='fv-help-block'>{formik.errors.country}</div>
                  </div>
                )} */}
              </div>
              
            </div>
            <button className='btn btn-danger col-lg-4 fv-row text-center' > Search</button>
          
        </ul>
        <i className='Textarea ' style={{paddingRight:'900px',fontSize:'15px' }}>
            
            
          
        
        </i>
        

        <h3 className='card-title align-items-start flex-column'>
          {/* <span className='fw-bolder mb-2 text-dark'>Activities</span> */}
          <span className='fw-bolder mb-2 text-dark'></span>
          <span className='text-muted fw-bold fs-7'></span>
        </h3>
        
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-5'>
        {/* begin::Timeline */}
        <div className='timeline-label'>
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-warning fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='fw-mormal timeline-content  ps-3'>
            <strong>07:00-08:00</strong><hr/> <br />
            <div className='row'>
                <div className='col-2'style={{height:'120px'}}>
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img1.png')} />
                    
                    </div>
                </div>
                <div className='col-2' >
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img2.png')} />
                    </div>
                </div>
                <div className='col-2' >
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img3.png')} />
                    </div>
                </div>
                <div className='col-2' >
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' >
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img5.png')} />
                    </div>
                </div>
                <div className='col-2' >
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img6.png')} />
                    </div>
                </div>

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Content */}
            <div className='timeline-content d-flex'>
              <div className='fw-bolder text-gray-800 ps-3'>08:00-09:00<hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
              </div>
              
            </div>
            
            {/* end::Content */}
          
          </div>
          
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bolder text-gray-800 ps-3'>
              09:00-10:00<hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                    <div className='col-2'style={{height:'120px',width:'158px'}}>
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>10:00-11:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold text-gray-800 ps-3'>
              <strong>11:00-12:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>12:00-13:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-danger fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Desc */}
            <div className='timeline-content fw-bold  ps-3'>
              <strong>13:00-14:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
            </div>
            {/* end::Desc */}
          </div>
          {/* end::Item */}
          {/* begin::Item */}
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder  fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-success fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>14:00-15:00</strong>
              <hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
            
            </div>
            
            {/* end::Text */}
          </div>
          <div className='timeline-item'>
            {/* begin::Label */}
            <div className='timeline-label fw-bolder text-gray-800 fs-6'></div>
            {/* end::Label */}
            {/* begin::Badge */}
            <div className='timeline-badge'>
              <i className='fa fa-genderless text-primary fs-1'></i>
            </div>
            {/* end::Badge */}
            {/* begin::Text */}
            <div className='timeline-content fw-mormal  ps-3'>
              <strong>15:00-16:00</strong><hr/> <br />
              <div className='row'>
                <div className='col-2'style={{height:'120px',width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                    {/* <img src=''/> */}
                    <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'158px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>
                <div className='col-2' style={{width:'155px'}}>
                <div >
                    <img style={{height:'100px', width:'130px'}} src={toAbsoluteUrl('/media/avatars/img4.png')} />
                    </div>
                </div>

            </div>
            </div>
            {/* end::Text */}
          </div>
          {/* end::Item */}
        </div>
        {/* end::Timeline */}
      </div>
      {/* end: Card Body */}
    </div>
  )
}

export default ListsWidget6
