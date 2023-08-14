<?php if (!defined('BASEPATH'))
	exit('No direct script access allowed');

class Language extends CI_Controller {
	public function __construct() {
		parent::__construct();
	}

	function index() {
		if (isset($_POST['toggle'])) {
			$this->setLang($_POST['toggle'], $_POST['back']);
			exit();
		} else {
			redirect($_POST['back']);
		}

	}

	function setLang($lang) {
		$langs = explode('|', $this->model_options->getOption('languages'));
		for ($i = 0; $i < count($langs); $i++)
			$langs[$i] = trim($langs[$i]);
		$pos_arg = strpos($_GET['back'], '?');
		$back = (isset($_GET['back'])) ? substr($_GET['back'], 0, (($pos_arg) ? $pos_arg : strlen($_GET['back']))) : '/';
		if (in_array($lang, $langs)) {
			set_userdata('language', $lang);
			redirect($back . '?lang=' . $lang);
		} else {
			set_userdata('language', $langs[0]);
			redirect($back . '?lang=' . $langs[0]);
		}

	}
}




function setLang($lang) {
    $langs = explode('|', $this->model_options->getOption('languages'));
    for ($i = 0; $i < count($langs); $i++)
        $langs[$i] = trim($langs[$i]);
    
    if (in_array($lang, $langs)) {
        set_userdata('language', $lang);
        $data['selected_lang'] = $lang;
    } else {
        set_userdata('language', $langs[0]);
        $data['selected_lang'] = $langs[0];
    }
    
    // Загрузите вьюху, передав в нее данные для отображения
    $this->load->view('language_result_view', $data);
}





















function translitRuToEn ($string)
{
    $r_trans = array(
        "а","б","в","г","д","е","ё","ж","з","и","й","к","л","м", 
        "н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","э", 
        "ю","я","ъ","ы","ь"," ",",","(",")","\"","А","Б","В","Г",
        "Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р",
        "С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Э","Ю","Я","Ъ","Ы",
        "Ъ","/",".","«","»","!","&","'",":","#","$","№","?","…","+","@","%","*",
        "і","І","є","Є","Ь","Ғ","ќ","қ","ң","ө","ә","ұ","ү","—"
    );

    $e_trans = array(
        "a","b","v","g","d","e","e","j","z","i","i","k","l","m", 
        "n","o","p","r","s","t","u","f","h","c","ch","sh","sch", 
        "e","yu","ya","","i","","-","-","-","","","a","b","v","g",
        "d","e","Yo","g","z","i","i","k","l","m","n","o","p","r",
        "s","t","u","f","h","c","Ch","Sh","Sch","e","Yu","Ya","",
        "i","","-","","","","","ft","","","no","s","nomber","","","-plus-","","","",
        "i","i","e","e","","g","k","k","n","e","e","y","y","-"
    );
    
     $string = str_replace($r_trans, $e_trans, $string);
    
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    
    
    
    $string = preg_replace('/[^a-z0-9-]+/is', '', $string);
    
    return $string;
}





//Жүргізуші куәлігіне емтихан тапсыру ережелері өзгертілді

//Казахский:         А Ә  Б  Д  Е  Ж  Ф  Ғ  Г  Х  И  Й  К  Л  М  Н  О  Ө  П  Р  С  Т  У  В  Ы  І  ІІ  З  Ч  Ш  Щ  Э  Ю  Я 
//Английский:        A AE B  D  E  ZH F  G  GH KH I  Y  K  L  M  N  O  O  P  R  S  T  U  V  Y  I  II  Z  CH SH SH' E YU YA

//Казахский:         а ә  б  д  е  ж  ф  ғ  г  х  и  й  к  л  м  н  о  ө  п  р  с  т  у  в  ы  і  іі  з  ч  ш  щ  э  ю  я
//Английский:        a ae b  d  e  zh f  g  gh kh i  y  k  l  m  n  o  o  p  r  s  t  u  v  y  i  ii  z ch sh sh' e yu ya

function translitKzToEn ($string)
{
    $k_trans = array(
        "а","ә","б","д","е","ё","ж","ф","ғ","г","х","и","й","к","л","м","н","о","ө","п","р","с","т","у","в","ы","i","ii","з","ч","ш","щ","э","ю","я",
        "А","Ә","Б","Д","Е","Ё","Ж","Ф","Ғ","Г","Х","И","Й","К","Л","М","Н","О","Ө","П","Р","С","Т","У","В","Ы","І","ІІ","З","Ч","Ш","Щ","Э","Ю","Я","/",".","«","»","!",
        "&","'",":","#","$","№","?","…","+","@","%","*","і","І","є","Є","Ь","Ғ","ќ","қ","ң","ө","ә","ұ","ү","—"," ",",","(",")","\"",
    );

    $e_trans = array(
        "a","b","v","g","d","e","e","j","z","i","i","k","l","m", 
        "n","o","p","r","s","t","u","f","h","c","ch","sh","sch", 
        "e","yu","ya","","i","","-","-","-","","","a","b","v","g",
        "d","e","Yo","g","z","i","i","k","l","m","n","o","p","r",
        "s","t","u","f","h","c","Ch","Sh","Sch","e","Yu","Ya","",
        "i","","-","","","","","ft","","","no","s","nomber","","","-plus-","","","",
        "i","i","e","e","","g","k","k","n","e","e","y","y","-"
    );
    
        $string = str_replace($k_trans, $e_trans, $string);
    
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    $string = str_replace('--','-',$string);
    
    
    
    $string = preg_replace('/[^a-z0-9-]+/is', '', $string);
    
    return $string;
}