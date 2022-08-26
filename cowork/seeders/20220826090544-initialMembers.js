'use strict';

module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.bulkInsert('Members',[
      {
        id:1,
        name:'Jennie',
        team:'team',
        emailAddress:'emailAdress',
        phoneNumber:'phoneNumber',
        admissionDate:'2020/11/21',
        birthday:'2020/11/21',
        profileImage:'profileImage',
      },
      {
        id:2,
        name:'Gdragon',
        team:'team',
        emailAddress:'emailAdress',
        phoneNumber:'phoneNumber',
        admissionDate:'2020/11/21',
        birthday:'2020/11/21',
        profileImage:'profileImage',
      },{
        id:3,
        name:'Jun',
        team:'team',
        emailAddress:'emailAdress',
        phoneNumber:'phoneNumber',
        admissionDate:'2020/11/21',
        birthday:'2020/11/21',
        profileImage:'profileImage',
      },
      
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Members',null,{});
  },
};
