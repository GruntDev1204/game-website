import { toast } from 'react-toastify'
export const themVaoGio = () => {
  toast.success('Thêm vào giỏ thành công!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 5000,
  })
}

export const addtoWish = () => {
  toast.success('Thêm vào mục ưa thích thành công!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 4000,
  })
}