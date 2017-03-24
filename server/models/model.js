var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var UserSchema = mongoose.Schema({
  name: {type:String}
},{timestamps:true});

var QuestionSchema = mongoose.Schema({
  question: {type:String,required:true, unique:true,min:[10,'Question is too short']},
  description: {type:String},
  _answers: [{type:Schema.Types.ObjectId, ref: 'Answer'}],
},{timestamps:true});

var AnswerSchema = mongoose.Schema({
  answer: {type:String,required:true,min:[5,'Answer is too short']},
  details: {type:String},
  likes: {type:Number},
  _user: {type:Schema.Types.ObjectId, ref: 'User'}
},{timestamps:true});

mongoose.model('User',UserSchema);
mongoose.model('Question',QuestionSchema);
mongoose.model('Answer',AnswerSchema);

QuestionSchema.plugin(deepPopulate);
