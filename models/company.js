'use strict';
module.exports = (sequelize, DataTypes) => {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    domain: DataTypes.STRING,
    slug: DataTypes.STRING,
    display: DataTypes.BOOLEAN,
    description: DataTypes.TEXT,
    batch: DataTypes.STRING,
    category: DataTypes.STRING,
    category_crunchbase: DataTypes.STRING,
    founded_year: DataTypes.INTEGER,
    closed_year: DataTypes.INTEGER,
    img_logo: DataTypes.TEXT,
    img_screenshot_desktop: DataTypes.TEXT,
    img_screenshot_mobile: DataTypes.TEXT,
    link_angellist: DataTypes.TEXT,
    link_crunchbase: DataTypes.TEXT,
    link_facebook: DataTypes.TEXT,
    link_instagram: DataTypes.TEXT,
    link_linkedin: DataTypes.TEXT,
    link_twitter: DataTypes.TEXT,
    link_video: DataTypes.TEXT,
    location_city: DataTypes.STRING,
    location_country: DataTypes.STRING,
    location_state: DataTypes.STRING,
    stat_alexa_rank: DataTypes.INTEGER,
    stat_crunchbase_funding_amount: DataTypes.INTEGER,
    stat_crunchbase_news_articles: DataTypes.INTEGER,
    stat_crunchbase_rank: DataTypes.INTEGER,
    stat_facebook_likes: DataTypes.INTEGER,
    stat_mattermark_growth_score: DataTypes.INTEGER,
    stat_moz_domain_authority: DataTypes.INTEGER,
    stat_producthunt_upvotes: DataTypes.INTEGER,
    stat_twitter_followers: DataTypes.INTEGER,
    status: DataTypes.STRING,
    webflow_id: DataTypes.STRING,
    yc_id: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('NOW()'),
    },
    updatedAt: {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('NOW()'),
    },
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};