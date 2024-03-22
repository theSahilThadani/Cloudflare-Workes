

export interface Env {

}


export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if(request.method == "GET"){
			return new Response('This get requiest');
		}
		else if (request.method == "POST"){
			return Response.json({
				msg:"This POST Request"
			})
		}
		return new Response('Hello World!');
	},
};
