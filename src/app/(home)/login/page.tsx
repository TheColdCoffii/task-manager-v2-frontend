'use client'
export default function Login(){
	return (
		<div>
			<button onClick={()=>{fetch("/api/login")}}>Login</button>
		</div>
	)
}