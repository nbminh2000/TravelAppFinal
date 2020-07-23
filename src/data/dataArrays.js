import React from 'react';
import axios from 'axios';

// export var cities = [];
// export var places = [];

export class getApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      cities: []
    }
  }

  componentDidMount() {
    axios.get({
      uri: 'http://192.168.1.222/TravelApp/public/place'
    }).then(res => this.setState({ places: res.data }))
      .catch(err => console.log(err))

    axios.get({
      uri: 'http://192.168.1.222/TravelApp/public/city'
    }).then(res => this.setState({ cities: res.data }))
      .catch(err => console.log(err))
  }
}


// export class getCity extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       cities: []
//     }
//   }

//   componentDidMount() {
//     axios.get({
//       uri: 'http://192.168.1.222/TravelApp/public/city'
//     }).then(res => this.setState({ cities: res.data }))
//       .catch(err => console.log(err))
//   }
// }

// cities = getApi.cities;
// places = getApi.places;






export const cities = [
  {
    id: 1,
    name: 'Đà Nẵng',
    description: 'Đà Nẵng là một thành phố trực thuộc trung ương, nằm trong vùng Duyên hải Nam Trung Bộ Việt Nam, là thành phố trung tâm và lớn nhất khu vực miền Trung - Tây Nguyên.',
    photo_url:
    'https://img1.kienthucvui.vn/uploads/2019/08/15/hinh-anh-dep-nhat-ve-da-nang_102908849.jpg'
  },
  {
    id: 2,
    name: 'An Giang',
    description: 'An Giang là một tỉnh thuộc vùng đồng bằng sông Cửu Long, Việt Nam. An Giang là tỉnh có dân số đông nhất đồng bằng sông Cửu Long, thuộc miền Nam Việt Nam. Một phần của An Giang nằm trong tứ giác Long Xuyên.',
    photo_url:
    'https://baoangiang.com.vn/image/fckeditor/upload/2020/20200224/images/t1b.jpg'
  },
  {
    id: 3,
    name: 'Bà Rịa - Vũng Tàu',
    description: 'Bà Rịa – Vũng Tàu là một tỉnh ven biển thuộc vùng Đông Nam Bộ, Việt Nam. Nằm trong vùng kinh tế trọng điểm phía Nam, ở vị trí cửa ngõ ra biển Đông của các tỉnh trong khu vực miền Đông Nam Bộ, Bà Rịa – Vũng Tàu kết nối thuận lợi với Thành phố Hồ Chí Minh và các địa phương khác bằng đường bộ, đường không, đường thủy và ...',
    photo_url:
    'https://media.baodautu.vn/Images/manhcuong/2019/05/20/ba-ria---vung-tau-khai-thong-tiem-luc-de-phat-trien-kinh-te1558292053.jpg'
  },
  {
    id: 4,
    name: 'Lâm Đồng',
    description: 'Đà Nẵng là một thành phố trực thuộc trung ương, nằm trong vùng Duyên hải Nam Trung Bộ Việt Nam, là thành phố trung tâm và lớn nhất khu vực miền Trung - Tây Nguyên.',
    photo_url:
    'https://baoxaydung.com.vn/stores/news_dataimages/vananh/032019/22/09/094915baoxaydung_image001.jpg'
  },
  {
    id: 5,
    name: 'Hà Nội',
    description: 'Hà Nội, thủ đô của Việt Nam, nổi tiếng với kiến trúc trăm tuổi và nền văn hóa phong phú với sự ảnh hưởng của khu vực Đông Nam Á, Trung Quốc và Pháp. Trung tâm thành phố là Khu phố cổ nhộn nhịp, nơi các con phố hẹp được mang tên \"hàng\". Có rất nhiều ngôi đền nhỏ, bao gồm Bạch Mã, tôn vinh một con ngựa huyền thoại, cùng với chợ Đồng Xuân, bán hàng gia dụng và thức ăn đường phố.',
    photo_url:
    'https://cms.luatvietnam.vn/uploaded/Images/Original/2018/11/15/nhap-ho-khau-ha-noi_1511142628.jpeg'
  },
  {
    id: 6,
    name: 'Thành phố Hồ Chí Minh',
    description: 'Thành phố Hồ Chí Minh (thường được gọi là Sài Gòn) là một thành phố ở miền nam Việt Nam nổi tiếng với vai trò nòng cốt trong chiến tranh Việt Nam. Sài Gòn cũng được biết đến với địa danh của thực dân Pháp, trong đó có Nhà thờ Đức Bà được xây dựng hoàn toàn bằng nguyên liệu nhập khẩu từ Pháp và Bưu điện trung tâm được xây dựng vào thế kỷ 19. Quán ăn nằm dọc các đường phố Sài Gòn, nhất là xung quanh chợ Bến Thành nhộn nhịp.',
    photo_url:
    'https://qhkt.hochiminhcity.gov.vn/Media/Uploads/Tin%20t%E1%BB%A9c/Nam%202019/Qu%C3%BD%201/images2304061_sggphoanghung_pept.jpg'
  },
];

export const places = [
  {
    placeID: 1,
    cityId: 1,
    title: 'Ngũ Hành Sơn',
    photo_url: 'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-ngu-hanh-son.jpg',
    photosArray: [
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-ngu-hanh-son.jpg'
    ],
    description:
      'Núi Ngũ Hành Sơn thuộc phường Hòa Hải, quận Ngũ Hành Sơn, cách thành phố Đà Nẵng 7km, gồm 5 ngọn núi đá: Kim Sơn, Mộc Sơn, Thủy Sơn, Hỏa Sơn, Thổ Sơn – khiến du khách liên tưởng đến cụm hòn non bộ nổi lên quanh cồn cát đầy đá, rộng thênh thang, quanh năm sóng vỗ. Thông thường, khách đến đây thường đến các ngọn núi lớn như Thủy Sơn, ghé hang động Huyền Không, Linh Nham, Vân Thông, Lăng Hư, Vân Nguyệt và chùa Tam Thai. Dưới chân cụm Ngũ Hành Sơn là những tác phẩm điêu khắc từ đá bởi các nghệ nhân ở làng đá mỹ nghệ Non Nước.'
  },
  {
    placeID: 2,
    cityId: 1,
    title: 'Bà Nà Hills',
    photo_url:
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-ba-na-hill.jpg',
    photosArray: [
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-ba-na-hill.jpg'
    ],
    description: 'Nằm tại xã Hòa Ninh, huyện Hòa Vang, núi Bà Nà cách Đà Nẵng 40km về hướng Tây Nam. Với những giá trị sinh thái lớn, núi Bà Nà là khu dự trữ thiên nhiên của Quốc Gia. Núi cao 1.489m so với mực nước biển. Tại đây, du khách có thể cảm nhận 4 mùa riêng biệt trong cùng 1 ngày: mùa xuân – buổi sáng, mùa hè – buổi trưa, mùa thu – buổi chiều, mùa đông – buổi tối. Tại Bà Nà, thời tiết luôn khô ráo, ít khi có mưa, nhiệt độ trung bình là 18 độ C. Sau khi đi cáp treo dài và dốc, từ đỉnh núi, khách du lịch được ngắm bao quát không gian mênh mông từ thành phố Đà Nẵng, biển, cho đến những cánh đồng xanh bất tận. Hiện, công viên giải trí Fantasy Park – nằm trong khuôn viên khu du lịch nghỉ dưỡng Bà Nà Hills – với mọi trò chơi giải trí phù hợp với các lứa tuổi, từ trẻ em với những trò vui nhộn đến thanh niên, người lớn với những trò cảm giác mạnh. Bạn còn có thể tìm thấy 3 khu ẩm thực phục vụ món ăn Âu, Á đầy hấp dẫn và các quầy hàng lưu niệm với đủ các sản phẩm đa dạng chủng loại.'
  },
  {
    placeID: 3,
    cityId: 1,
    title: 'Cầu Vàng Đà Nẵng',
    photo_url: 'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-cau-vang-da-nang.jpg',
    photosArray: [
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-cau-vang-da-nang.jpg'
    ],
    description:
      'Được xây dựng ở độ cao 1400m so với mực nước biển, cầu có chiều dài 148.6m, chia thành 8 nhịp, nhịp dài nhất khoảng 21.2m. Là một cây cầu đi bộ, cây cầu Vàng Đà Nẵng sở hữu bề ngang mặt cầu là 3 m với vật liệu mặt cầu là gỗ kiềng dày 5cm để bạn có thể tha hồ vui chơi, nhảy nhót. Điểm đặc biệt làm nên cái tên chính là khung lan can inox mạ vàng. Thuộc khu Resort Bà Nà Hills, Cầu Vàng đã gây rúng động truyền thông trong suốt năm 2018 vừa qua.'
  },
  {
    placeID: 4,
    cityId: 1,
    title: 'Bán đảo Sơn Trà',
    photo_url:
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-ban-dao-son-tra.jpg',
    photosArray: [
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-ban-dao-son-tra.jpg'
    ],
    description:
      'Đây là một bán đảo hình nấm thuộc quận Sơn Trà, cách trung tâm 10km về hướng Đông Bắc. Đến đây, du khách sẽ được khám phá rừng già Sơn Trà, tắm biển ở bãi Bụt, bãi tắm Mỹ Khê, câu cá cùng ngư dân, thăm hải đăng Tiên Sa, lặn biển ngắm san hô. Ngoài ra, quý khách còn được tham quan chùa Linh Ứng – chùa tựa đỉnh Sơn Trà với bức tượng Phật Bổn Sư Thích Ca Mô Ni chính giữa cùng phật Quan Thế Âm Bồ Tát bên phải, Tam Tạng Phật bên trái với bốn vị Thần Long Hộ Pháp cùng 18 vị La Hán bảo vệ chính điện. Cạnh đó, có suối Mơ trong vắt, ngọn thác Tóc Tiên, và mũi Nghê – nơi vinh hạnh được đón ánh nắng bình minh đầu tiên của Đà Nẵng.'
  },
  {
    placeID: 5,
    cityId: 1,
    title: 'Đèo Hải Vân',
    photo_url: 'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-deo-hai-van.jpg',
    photosArray: [
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-deo-hai-van.jpg'
    ],

    description:
      'Nằm giữa địa giới tỉnh Thừa Thiên Huế và thành phố Đà Nẵng là đèo Hải Vân với độ dài 20km, cao 500m so với mức nước biển. Đèo Hải Vân nổi tiếng là đường đèo đẹp và hiểm trở nhất Việt Nam. Từ đỉnh đèo, du khách được ngắm những phong cảnh ấn tượng về dải bờ biển vô cùng đẹp của Việt Nam. Với làng chài Lăng Cô đẹp như tranh vẽ, đỉnh Sơn Trà mây phủ quanh năm, cát trắng phai của bãi Non Nước,…'
  },
  {
    placeID: 6,
    cityId: 1,
    title: 'Bãi biển Mỹ Khê',
    photo_url: 'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-bien-my-khe.jpg',
    photosArray: [
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-bien-my-khe.jpg',
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-bien-my-khe.jpg',
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-bien-my-khe.jpg'
    ],

    description:
      'Tạp chí Forbes đã bình chọn đây là 1 trong 6 bãi biển quyến rũ nhất hành tinh với chiều dài 900m cùng bãi cát trắng, mịn và đầy thơ mộng vào tháng 7/2013. Đặc biệt, với những du khách yêu thích các hoạt động thể thao cũng được tham gia tập lặn biển, câu cá, lướt ván, ca nô, đá bóng bãi biển… Khi bạn đến vào mùa hè, luôn có những hoạt động giao lưu văn hóa theo chủ đề hàng năm dọc trục bãi biển. Với đội ngũ chuyên nghiệp luôn ngồi trên chòi hay thuyền thúng trên bãi biển, bạn hoàn toàn yên tâm xuống biển trong thời gian từ 5h sáng đến 20h tối hàng ngày. Biển Mỹ Khê không quá xa trung tâm nên rất thuận tiện cho du khách đi lại. Đây là một trong những bãi biển đẹp nhất Việt Nam, thuộc 12 điểm du lịch Đà Nẵng không thể bỏ qua 2019.'
  },
  {
    placeID: 7,
    cityId: 1,
    title: 'Phố cổ Hội An',
    photo_url:
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-pho-co-hoi-an.jpg',
    photosArray: [
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-pho-co-hoi-an.jpg',
      'https://ezcloud.vn/wp-content/uploads/2019/03/12-diem-du-lich-da-nang-pho-co-hoi-an.jpg'
    ],
    description:
      'Cách Đà Nẵng 30km, Hội An – thuộc địa phận tỉnh Quảng Nam – được UNESCO công nhận là di sản văn hóa thế giới năm 1999. Phố cổ Hội An được bảo tồn nguyên vẹn, làm nên nét hấp dẫn với du khách. Những nếp nhà cổ đã được xây dựng hàng trăm năm với tường sơn màu vàng, những con đường nhỏ hẹp sẽ đưa bạn lạc vào một không gian hoài cổ, tránh xa phố thị ồn ào.\r\n\r\nKhi màn đêm buông xuống, phong cảnh phố cổ Hội An càng lung linh với những căn nhà được thắp sáng bởi hàng nghìn chiếc đèn lồng đủ màu sắc. Đừng bỏ lỡ cơ hội đi tản bộ dưới những con đường nhộn nhịp và thưởng thức các món ăn dân dã của phố Hội! Đặc biệt, du khách có thể thả hoa đăng cùng những nguyện ước, và đi thuyền trên sông Hoài để cảm nhận hết vẻ đẹp của đô thị cổ này.'
  },
  {
    placeID: 8,
    cityId: 5,
    title: 'Quảng trường Ba Đình – Lăng Bác',
    photo_url:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/06/quang-truong-ba-dinh-54bcaffd67cd7-1.jpg',
    photosArray: [
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/06/quang-truong-ba-dinh-54bcaffd67cd7-1.jpg'
    ],
    description:
      'Nếu đã đặt chân tới mảnh đất ngàn năm văn hiến thì Lăng Bác – Quảng trường Ba Đình là địa điểm du lịch ở Hà Nội mà các bạn không thể bỏ qua. Nơi đây là trung tâm chính trị của Việt Nam với nhà Quốc hội, Phủ Chủ tịch, Bảo tàng Hồ Chí Minh,… Lăng Bác là nơi lưu giữ thi hài của vị lãnh tụ kính yêu. Bên ngoài lăng là những hàng tre xanh bát ngát. Lăng chủ tích mở cửa vào sáng thứ 3,4,5,7 và chủ nhật. Khi vào viếng lăng Bác, bạn chú ý ăn mặc chỉnh tề, không đem theo các thiết bị điện tử ghi hành và giữ trật tự trong lăng.'
  },
  {
    placeID: 9,
    cityId: 5,
    title: 'Phố cổ Hà Nội',
    photo_url: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/06/pho-hang-ma-ha-noi.jpg',
    photosArray: [
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/06/pho-hang-ma-ha-noi.jpg"
    ],

    description:
      'Muốn tìm hiểu về cuộc sống, văn hóa và con người Tràng An thì bạn đừng bỏ qua phố cổ – một trong những địa điểm du lịch ở Hà Nội đầy thú vị và hấp dẫn với du khách. Phố cổ Hà Nội nằm ở phía Tây và phía Bắc của Hồ Hoàn Kiếm, là nơi tập trung đông dân cư sinh sống có 36 phố phường. Mỗi con phố ở đây chủ yếu tập trung bán một loại mặt hàng nhất định.'
  },
  {
    placeID: 10,
    cityId: 6,
    title: 'Chợ Bến Thành',
    photo_url: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/cho-ben-thanh-1.png',
    photosArray: [
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/cho-ben-thanh-1.png'
    ],
    description:
      'Chợ Bến Thành nằm ngay trung tâm của thành phố, cả 4 cửa đều hướng ra những con đường lớn như Phan Chu Trinh, Phan Bội Châu và Lê Thánh Tôn, hướng còn lại là quảng trường Quách Thị Trang. Nếu bạn là người thích mua sắm thì hay ghi ngay vào list những địa điểm tham quan Sài Gòn đi nhé! Bên trong chợ bày bán đủ các mặt hàng truyền thống, hiện đại có thể làm quà cho gia đình, bạn bè. Chợ Bến Thành cũng là một trong những địa điểm lý tưởng để thưởng thức những món ăn Việt Nam truyền thống. Dừng chân bên những gian hàng ăn với các món đặc sản địa phương như cá chiên xù hay nhấm nháp vài ly trà đá giải khát. Một lưu ý là khi mua sắm ở đây, các bạn nên mặc để có được giá hời nhất.'
  },
  {
    placeID: 11,
    cityId: 6,
    title: 'Phố đi bộ Nguyễn Huệ',
    photo_url: 'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/pho-di-bo-nguyen-hue.png',
    photosArray: [
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/pho-di-bo-nguyen-hue.png'
    ],
    description:
      'Phố đi bộ Nguyễn Huệ là cái tên không thể thiếu trong những địa điểm tham quan Sài Gòn. Được xây dựng vào tháng 4 năm 2015, có chiều dài 670m và chiều rộng 64m. Tạo lạc ngay trung tâm Sài Gòn, phố đi bộ nổi bật với nền đá granite, hai đài phun nước lớn, nhiều cây xanh và hệ thống điều khiển âm thanh, ánh sáng hiện đại. Vào buổi tối và ngày cuối tuần, người dân và du khách thường đến đây để dạo mát cũng như hòa mình vào không khí sôi động nơi đây. Dọc hai ven đường là những quầy hàng bán đặc sản của Sài Gòn như cơm tấm, cà phê, bánh mỳ, chè…'
  },
  {
    placeID: 12,
    cityId: 4,
    title: 'Thành phố Đà Lạt',
    photo_url: 'https://s3-ap-southeast-1.amazonaws.com/tz-mag-media/wp-content/uploads/2018/06/14174920/image6.jpg',
    photosArray: [
      'https://s3-ap-southeast-1.amazonaws.com/tz-mag-media/wp-content/uploads/2018/06/14174920/image6.jpg'
    ],
    description:
      'Đà Lạt là thành phố tỉnh lỵ của tỉnh Lâm Đồng, nằm trên cao nguyên Lâm Viên, thuộc vùng Tây Nguyên, Việt Nam. Từ xa xưa, vùng đất này vốn là địa bàn cư trú của những cư dân người Lạch, người Chil và người Srê thuộc dân tộc Cơ Ho'
  }
];

