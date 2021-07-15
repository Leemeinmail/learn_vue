<?php

$data_catalog = __DIR__ . "/data";

$post_data = json_decode( file_get_contents("php://input"), 1 );

$_POST = json_decode( $post_data["body"], 1 );

switch( $_POST['action'] ){

	case "get_home":

		$home = json_decode( file_get_contents( $data_catalog . "/home.txt" ), 1 );

		echo json_encode( $home );

	break;

	case "blog_list":

		$posts = json_decode( file_get_contents( $data_catalog . "/blog_list.txt" ), 1 );

		$posts_finish = $_POST['page'] * $_POST['num'];
		$posts_start  = $posts_finish - $_POST['num'];

		$p = array_slice( $posts, $posts_start, $_POST['num'] );

		echo json_encode($p);

	break;

	case "get_pagination_pages":

		$posts = json_decode( file_get_contents( $data_catalog . "/blog_list.txt" ), 1 );

		$pages = [];

		$page_num = ceil( count($posts) / $_POST['num'] );

		for ($i = 1; $i <= $page_num; $i++) { 
			$pages[$i] = [ "title" => $i, "url" => "/blog-list/" . $i];
		}

		echo json_encode($pages);

	break;

	case "get_post":

		$posts = json_decode( file_get_contents( $data_catalog . "/blog_list.txt" ), 1 );

		$post = [];

		foreach( $posts as $post_key => $post_val ){
			if( $_POST["id"] == $post_key ){
				$post["title"] = $post_val["title"];
				$post["content"] = $post_val["content"];
				break;
			}
		} 

		echo json_encode( $post );

	break;

	case "get_contacts":

		echo file_get_contents( $data_catalog . "/contacts.txt" );

	break;

	case "get_menu_points":

		echo file_get_contents( $data_catalog . "/menu_points.txt" );

	break;

	case "get_menu_title":

		echo "Vue SPA site";

	break;

	case "test":

		echo "test";

	break;

	default:

		echo "request in not valid or empty";

	break;

}	

#echo "<pre>";
#var_dump( $posts );
#echo "</pre>";